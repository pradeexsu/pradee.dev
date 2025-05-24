declare global {
  interface String {
    inject(
      replace: string,
      jsx: (val: string) => JSX.Element | string,
    ): JSX.Element;
    injectMany(
      replacements: Record<string, (val: string) => JSX.Element | string>,
    ): JSX.Element;
  }
}

String.prototype.inject = function (
  replace: string,
  jsx: (val: string) => JSX.Element,
): JSX.Element {
  const parts = this.split(replace);
  return (
    <>
      {parts.map((part, index) =>
        index === parts.length - 1 ? part : [part, jsx(replace)],
      )}
    </>
  );
};

function injectMany(
  str: string,
  replacements: Record<string, (val: string) => JSX.Element | string>,
): JSX.Element {
  // Create a regex to match any of the keys
  const keys = Object.keys(replacements).map((k) =>
    k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  );
  const regex = new RegExp(`(${keys.join('|')})`, 'g');
  const parts = str.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        replacements[part] ? replacements[part](part) : part,
      )}
    </>
  );
}

String.prototype.injectMany = function (
  replacements: Record<string, (val: string) => JSX.Element | string>,
): JSX.Element {
  return injectMany(this as string, replacements);
};

export {};
