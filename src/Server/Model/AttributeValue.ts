export class AttributeValue {
  public attrType: AttributeValue.AttrType
  public S?: string
  public N?: number
  public SL?: string[]
  public SDM?: { [key: string]: number }

  constructor(s: string)
  constructor(n: number)
  constructor(sl: string[])
  constructor(sdm: { [key: string]: number })
  constructor(arg: string | number | string[] | { [key: string]: number }) {
    if (typeof arg === 'string') {
      this.attrType = AttributeValue.AttrType.STRING
      this.S = arg
    } else if (typeof arg === 'number') {
      this.attrType = AttributeValue.AttrType.DOUBLE
      this.N = arg
    } else if (arg instanceof Array) {
      this.attrType = AttributeValue.AttrType.STRING_LIST
      this.SL = arg
    } else if (arg instanceof Object) {
      this.attrType = AttributeValue.AttrType.STRING_DOUBLE_MAP
      this.SDM = arg
    } else {
      throw new Error('Invalid argument')
    }
  }
}

export namespace AttributeValue {
  export enum AttrType {
    STRING = 1,
    DOUBLE,
    STRING_LIST,
    STRING_DOUBLE_MAP
  }
}
