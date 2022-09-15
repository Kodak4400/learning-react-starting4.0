import { useRef } from 'react'

const TextInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div>
      {/* 組み込みコンポーネントinputとそれに対応する実際にレンダリングされたリアルDOMとの結び付け。リアルDOMへの参照がref */}
      {/* 「そうだね、今やったようなフォーカスだったり、テキストの選択やアニメーションの発火だったり、
      動画・音声再生の管理みたいなことをやりたいときに ref を使うかな。私は無限スクロールを自分で実装
      したとき、DOM 要素の高さを取得するために ref を使ったことがあるよ」 */}
      <input type="text" ref={inputRef} />
      <input type="button" value="フォーカス" onClick={handleClick} />
    </div>
  )
}

export default TextInput
