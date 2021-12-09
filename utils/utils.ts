export const timer: (ms) => Promise<unknown> = (
 ms
) => new Promise((res) => setTimeout(res, ms))

export const isDocumentDefined: boolean =
 typeof document !== 'undefined'

// export const classNames = (...classes: (false | null | undefined | string)[]) => classes.filter(Boolean).join(" ");
