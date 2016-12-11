export default function htmlify({title, body}) {
    return `<!DOCTYPE html>
<html amp>
    <head>
        <meta charset=”utf-8″ />
        <title>${title}</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    </head>
    <body>
        ${body}
    </body>
</html>`
}
