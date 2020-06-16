const widgetId = 'widgetId';

export const ROOT_URL = process.env.STORYBOOK_ROOT_URL || 'http://localhost:9000';

export const createScript = () => {
  const widgetDiv = document.getElementById(widgetId);
  const newDiv = document.createElement('div');
  newDiv.id = widgetId;
  widgetDiv.replaceWith(newDiv);
  const script = document.createElement('script');
  script.setAttribute('data-id', widgetId);
  return script;
};

export const createCodeNote = (script) => {
  const widgetDiv = document.getElementById(script.dataset.id);
  return (
    `<span>${widgetDiv.outerHTML.indexOf('&quot;') > 0 ? 'NOTE: When data attributes contain arrays or objects the below code snippet shows `&quot;` HTML values as left double quotes (`“`) due to being stringified': ''}</span>
    <code>
      ${
    widgetDiv.outerHTML
      .replace(/</, '&lt;') // needed to show the actual HTML code
      .replace(/">/, '"<br/>>') // adds newline prior to closing element
      .replace(/ ([a-z-]*=)/g, '<br/>&nbsp;&nbsp;$1') // adds newlines and 2 spaces between attributes
      .replace(/=""/g, '') // removes all empty string attribute values (booleans)
    }
      <br/>
      ${
    script.outerHTML
      .replace(/</, '&lt;') // needed to show the actual HTML code
      .replace(/">/, '"<br/>>') // adds newline prior to closing element
      .replace(/ ([a-z-]*=)/g, '<br/>&nbsp;&nbsp;$1') // adds newlines and 2 spaces between attributes
    }
    </code>`
  );
};
