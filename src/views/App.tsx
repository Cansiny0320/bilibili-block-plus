import { useEffect, useState } from 'react'
import { StopOutlined } from '@ant-design/icons'
// const Container = styled.div`
//   width: 32px;
//   position: relative;
// `

// const Textarea = styled.textarea`
//   position: absolute;
//   left: 36px;
//   width: 200px;
//   height: 70px;
//   max-width: 200px;
// `

const preFix = 'bilibili-block-plus'
export const storageKey = `${preFix}-block-list`

export const App: React.FC = () => {
  const [showInput, setShowInput] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    const init = async () => {
      const data = await GM.getValue<string>(storageKey)
      setValue(data)
    }
    init()
  }, [])

  return (
    <div style={{
      width: 32,
      position: 'relative',
    }}>
      <StopOutlined
        style={{ fontSize: '32px', cursor: 'pointer' }}
        onClick={async () => {
          if (showInput) {
            await GM.setValue(storageKey, value)
          }
          setShowInput(!showInput)
        }}
      />
      {showInput && (
        <textarea
        style={{
          position: 'absolute',
          left: 36,
          width: 200,
          height: 70,
          maxWidth: 200,
        }}
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          placeholder="输入屏蔽规则，每行一个"
        />
      )}
    </div>
  )
}
