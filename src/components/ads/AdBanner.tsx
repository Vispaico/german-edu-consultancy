type AdBannerProps = {
  title: string
  width: number
  height: number
  className?: string
}

const AD_KEY = '8ac5f4f50bc587629875867e1ebb60b8'
const AD_SCRIPT_SRC = 'https://prototypesorting.com/8ac5f4f50bc587629875867e1ebb60b8/invoke.js'

const getSrcDoc = (width: number, height: number) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      html, body { margin: 0; padding: 0; background: transparent; display: flex; justify-content: center; align-items: center; }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      atOptions = {
        'key' : '${AD_KEY}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="${AD_SCRIPT_SRC}"></script>
  </body>
</html>`

export default function AdBanner({ title, width, height, className }: AdBannerProps) {
  return (
    <iframe
      title={title}
      className={className}
      srcDoc={getSrcDoc(width, height)}
      width={width}
      height={height}
      scrolling="no"
      style={{ border: 'none', maxWidth: '100%' }}
    />
  )
}
