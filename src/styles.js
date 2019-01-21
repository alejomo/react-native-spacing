import cs from "./utils/stylesheet";
import { getMarginStyle as ms, getPaddingStyle as ps } from "./utils/spacing";

// Cannot use dynamic named exports...
// https://stackoverflow.com/questions/39709189/javascript-es6-modules-is-it-possible-to-export-a-variable-with-a-dynamic-nam

// Raw margin styles
export const _m = size => ms({ m: size });
export const _mt = size => ms({ mt: size });
export const _mr = size => ms({ mr: size });
export const _mb = size => ms({ mb: size });
export const _ml = size => ms({ ml: size });
export const _mv = size => ms({ mv: size });
export const _mh = size => ms({ mh: size });

// Raw padding styles
export const _p = size => ps({ p: size });
export const _pt = size => ps({ pt: size });
export const _pr = size => ps({ pr: size });
export const _pb = size => ps({ pb: size });
export const _pl = size => ps({ pl: size });
export const _pv = size => ps({ pv: size });
export const _ph = size => ps({ ph: size });

// RN margin styles
export const m = size => cs(_m(size));
export const mt = size => cs(_mt(size));
export const mr = size => cs(_mr(size));
export const mb = size => cs(_mb(size));
export const ml = size => cs(_ml(size));
export const mv = size => cs(_mv(size));
export const mh = size => cs(_mh(size));

// RN padding styles
export const p = size => cs(_p(size));
export const pt = size => cs(_pt(size));
export const pr = size => cs(_pr(size));
export const pb = size => cs(_pb(size));
export const pl = size => cs(_pl(size));
export const pv = size => cs(_pv(size));
export const ph = size => cs(_ph(size));
