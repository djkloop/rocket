import type { CSSProperties, VNode, VueElement } from "vue";

// Hoc
export type TContainerHoc = (
  ForemItem: VNode,
  formItemProps: {
    type: string;
    fieldKey: string;
    containerStyle: CSSProperties;
    error: string;
    parentMode: string;
    parentType: string;
    // 是否是第一个表单
    isFirst: boolean;
    uiProp: Record<string, any>;
    theme: string; // ??? dark | light
  }
) => void;
