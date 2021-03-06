export const Text = ({ text }) => {
  if (!text) {
    return null
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value
    return (
      <span
        className={[
          bold ? 'font-bold' : '',
          code
            ? 'text-white bg-black bg-opacity-80 text-sm inline-block py px-1 rounded-sm mx-1 my-1'
            : '',
          italic ? 'italic' : '',
          strikethrough ? 'stroke-1' : '',
          underline ? 'underline' : '',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a href={text.link.url} className="text-indigo-500 hover:underline">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    )
  })
}
