type AdBannerProps = {
  title: string
  width: number
  height: number
  className?: string
}

const AD_CONFIG_BY_SIZE: Record<
  string,
  {
    key: string
    scriptSrc: string
  }
> = {
  '728x90': {
    key: 'bf8c79a56f728e25b8039dd65fb3492a',
    scriptSrc: 'https://prototypesorting.com/bf8c79a56f728e25b8039dd65fb3492a/invoke.js',
  },
  '320x50': {
    key: '8ac5f4f50bc587629875867e1ebb60b8',
    scriptSrc: 'https://prototypesorting.com/8ac5f4f50bc587629875867e1ebb60b8/invoke.js',
  },
}

const DEFAULT_AD_CONFIG = AD_CONFIG_BY_SIZE['320x50']

const getSrcDoc = (width: number, height: number) => {
  const adConfig = AD_CONFIG_BY_SIZE[`${width}x${height}`] ?? DEFAULT_AD_CONFIG

  return `<!DOCTYPE html>
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
        'key' : '${adConfig.key}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="${adConfig.scriptSrc}"></script>
  </body>
</html>`
}

export default function AdBanner({ title, width, height, className }: AdBannerProps) {
  return (
    <iframe
      title={title}
      className={className}
      srcDoc={getSrcDoc(width, height)}
      width={width}
      height={height}
      scrolling="no"
      sandbox="allow-scripts"
      referrerPolicy="no-referrer"
      loading="lazy"
      style={{ border: 'none', maxWidth: '100%' }}
    />
  )
}
