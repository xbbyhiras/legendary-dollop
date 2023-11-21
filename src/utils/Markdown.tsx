import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const remarkPlugins = [gfm]

export const Markdown = ({ children }: { children: string }) => (
  <ReactMarkdown remarkPlugins={remarkPlugins}>{children}</ReactMarkdown>
)
