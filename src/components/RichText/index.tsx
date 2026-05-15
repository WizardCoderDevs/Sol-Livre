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
          <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">
            {children[0].text}
          </h2>
        )
      }

      return (
        <p className="mb-4 text-lg leading-relaxed text-foreground/80">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </p>
      )
    }

    case 'headingOne':
      return (
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </h1>
      )

    case 'headingTwo':
      return (
        <h2 className="mb-4 text-3xl font-bold text-foreground">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </h2>
      )

    case 'headingThree':
      return (
        <h3 className="mb-4 text-2xl font-bold text-foreground">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </h3>
      )

    case 'headingFour':
      return (
        <h4 className="mb-4 text-xl font-bold text-foreground">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </h4>
      )

    case 'list':
      return (
        <ul className="mb-4 list-disc list-inside text-lg text-foreground/80">
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </ul>
      )

    case 'listitem':
      return (
        <li>
          {children.map((child: AnyNode, i: number) => (
            <RenderNode key={i} node={child} />
          ))}
        </li>
      )

    case 'quote':
      return (
        <blockquote className="mb-4 border-l-4 border-accent pl-4 italic text-foreground/70">
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

      if (node.bold) {
        content = <strong>{content}</strong>
      }
      if (node.italic) {
        content = <em>{content}</em>
      }
      if (node.underline) {
        content = <u>{content}</u>
      }
      if (node.strikethrough) {
        content = <s>{content}</s>
      }
      if (node.code) {
        content = <code className="rounded bg-surface px-1 py-0.5 text-sm">{content}</code>
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