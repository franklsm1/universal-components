const widgetId = 'widgetId';

export const ROOT_URL = process.env.STORYBOOK_ROOT_URL || 'http://localhost:9000';

export const createScript = () => {
  const script = document.createElement('script');
  script.setAttribute('data-id', widgetId);
  return script;
};

export const createCodeNote = (script) => {
  const rootDiv = `<div id=${widgetId}></div>`;
  return (
    `<code>
      ${rootDiv.replace(/</, '&lt;')}
      <br/>
      ${
    script.outerHTML
      .replace(/</, '&lt;') // needed to show the actual HTML code
      .replace(/<\//, '<br/></') // adds newline prior to closing tag
      .replace(/ ([a-z-]*=)/g, '<br/>$1') // adds newlines between attributes
      .replace(/=""/g, '') // removes all empty string attribute values (booleans)
    }
    </code>`
  );
};
