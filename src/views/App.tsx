import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { StopOutlined } from '@ant-design/icons'
const Container = styled.div`
  width: 32px;
  position: relative;
`

const Textarea = styled.textarea`
  position: absolute;
  left: 36px;
  width: 200px;
  height: 70px;
  max-width: 200px;
`

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
    <Container>
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
        <Textarea
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          placeholder="输入屏蔽规则，每行一个"
        />
      )}
    </Container>
  )
}
