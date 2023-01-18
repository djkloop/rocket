type TColorTypes = "colorRgba" | "colorRgb" | "colorHex";

type TColorPattern = Record<TColorTypes, RegExp>;

const customPattern: TColorPattern = {
  colorRgba:
    /^[rR][gG][Bb][Aa][(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),[\s]*(0\.\d{1,2}|1|0)?[)]{1}$/,
  colorRgb:
    /^[rR][gG][Bb][(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[)]{1}$/,
  colorHex: /^#[0-9a-fA-F]{6}$/,
};

const color = (data: string): boolean => {
  const { colorHex, colorRgb, colorRgba } = customPattern;
  if (/^[rR][gG][Bb]/.test(data) && colorRgb.test(data)) {
    // rgb
    return true;
  } else if (/^[rR][gG][Bb][Aa]/.test(data) && colorRgba.test(data)) {
    // rgba
    return true;
  } else if (colorHex.test(data)) {
    // #xxxxxx
    return true;
  }

  return false;
};

export default color;
