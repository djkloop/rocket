import {
  h,
  Fragment,
  provide,
  InjectionKey,
  inject,
  defineComponent,
  FunctionalComponent,
} from "vue";

export type Selector<Value extends Record<string, any>, Props extends {}> = (
  initialContext: Value,
  props: Props
) => Record<string, any>;

export type DefineContext<
  Value extends Record<string, any>,
  Props extends {},
  Selectors extends Selector<Value, Props>[]
> = {
  [Key in keyof Selectors]: Selectors[Key] extends Selector<Value, Props>
    ? ReturnType<Selectors[Key]>
    : {};
};

export type First<
  F extends Record<string, any>,
  R extends Record<string, any>[]
> = [F, ...R];

export type MergeContext<H extends Record<string, any>[]> = H extends []
  ? {}
  : H extends First<infer C, []>
  ? C
  : H extends First<infer C, infer R>
  ? C & MergeContext<R>
  : {};

export type Context<
  Value extends Record<string, any>,
  Props extends {},
  Selectors extends Selector<Value, Props>[]
> = Value & MergeContext<DefineContext<Value, Props, Selectors>>;

export type VContextProvider<Props extends {}> = FunctionalComponent<Props, {}>;

/**
 * Compose context with hooks
 * @param useValue function for init context state
 * @param selectors hooks with context
 */
export function createContext<
  Props extends {},
  Value extends Record<string, any>,
  Selectors extends Selector<Value, Props>[]
>(useValue: (props: Props) => Value, ...selectors: Selectors) {
  const injectionKey: InjectionKey<Context<Value, Props, Selectors>> = Symbol();

  const NO_PROVIDER = {};

  const ContextProvider: VContextProvider<Props> = (props, { slots }) => {
    return h(
      defineComponent({
        name: (props as any).name ?? "Provider",
        setup() {
          const initialContext = useValue(props);

          const hookContextValues = selectors.reduce((merged, selector) => {
            return Object.assign(
              {},
              merged,
              selector.call(null, initialContext, props)
            );
          }, Object.create(null));

          provide(
            injectionKey,
            Object.assign({}, initialContext, hookContextValues)
          );

          return () => h(Fragment, slots.default?.());
        },
      })
    );
  };

  function dispatch() {
    const context = inject(injectionKey, NO_PROVIDER) as Context<
      Value,
      Props,
      Selectors
    >;

    if (context === NO_PROVIDER) {
      console.warn("[vc-state] The ContextProvider is never used.");
    }

    return context;
  }

  return [ContextProvider, dispatch] as const;
}
