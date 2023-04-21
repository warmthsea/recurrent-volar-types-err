declare const DocsAPI: {
  DocEditor: {
    new (
      id: string,
      config: import('./src/components/office/type').OnlyOfficeConfigType
    ): import('./src/components/office/type').OnlyOfficeFunType
  }
}
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare type TimeoutHandle = ReturnType<typeof setTimeout>
declare type IntervalHandle = ReturnType<typeof setInterval>
