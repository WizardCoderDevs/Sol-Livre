// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyNode = any

export default function RichText({ data, className }: { data: any; className?: string }) {
  const classNameValue = className || ''

  if (!data?.root?.children) {
    return null
  }

  return (
    <div className={`rich-text ${classNameValue}`}>
      {data.root.children.map((node: AnyNode, index: number) => (
        <RenderNode key={index} node={node} />
      ))}
    </div>
  )
}

function RenderNode({ node }: { node: AnyNode }) {
  const children = node.children || []

  switch (node.type) {
    case 'paragraph': {
      if (children.length === 0) return null

      if (children.length === 1 && children[0].type === 'text' && children[0].format === 1) {
        return (
          <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground leading-tight">
            {children[0].text}
          </h2>
        )
      }

      return (
        <p className="mb-6 text-lg leading-relaxed text-foreground/85 tracking-wide">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </p>
      )
    }

    case 'headingOne':
      return (
        <h1 className="mb-6 text-4xl font-bold text-foreground leading-tight">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </h1>
      )

    case 'headingTwo':
      return (
        <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground leading-tight">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </h2>
      )

    case 'headingThree':
      return (
        <h3 className="mt-8 mb-3 text-xl font-semibold text-foreground leading-snug">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </h3>
      )

    case 'headingFour':
      return (
        <h4 className="mt-6 mb-2 text-lg font-semibold text-foreground leading-snug">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </h4>
      )

    case 'list':
      return (
        <ul className="mb-6 ml-6 list-disc space-y-2 text-lg text-foreground/85 leading-relaxed">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </ul>
      )

    case 'listitem':
      return (
        <li className="text-foreground/85">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </li>
      )

    case 'quote':
      return (
        <blockquote className="my-8 border-l-4 border-accent pl-6 py-2 italic text-xl text-foreground/75 leading-relaxed">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </blockquote>
      )

    case 'link': {
      const isExternal = node.fields?.linkType === 'custom'
      const href = isExternal ? node.fields?.url : '#'
      const isNewTab = node.fields?.newTab

      return (
        <a
          href={href}
          target={isNewTab ? '_blank' : undefined}
          rel={isNewTab ? 'noopener noreferrer' : undefined}
          className="text-accent underline hover:text-accent/80"
        >
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </a>
      )
    }

    case 'text': {
      let content: React.ReactNode = node.text

      const format = node.format || 0
      if (format & 1) {
        content = <strong className="font-semibold text-foreground">{content}</strong>
      }
      if (format & 2) {
        content = <em>{content}</em>
      }
      if (format & 4) {
        content = <u className="underline decoration-accent/50">{content}</u>
      }
      if (format & 8) {
        content = <s>{content}</s>
      }
      if (node.code) {
        content = <code className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono">{content}</code>
      }

      return <>{content}</>
    }

    case 'horizontalrule':
      return <hr className="my-8 border-surface-border" />

    default:
      if (children.length > 0) {
        return (
          <>
            {children.map((child: AnyNode, i: number) => (
              <RenderNode key={i} node={child} />
            ))}
          </>
        )
      }
      return null
  }
}