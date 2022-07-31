import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { StopOutlined } from '@ant-design/icons'
import { Input } from 'antd'
const Container = styled.div`
  width: 32px;
  /* overflow: hidden; */
  position: relative;
`
const { TextArea } = Input

const preFix = 'bilibili-block-plus'
export const storageKey = `${preFix}-block-list`
export const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [value, setValue] = useState('')
  useEffect(() => {
    const link = document.createElement('link')

    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/antd/4.22.2/antd.min.css'
    link.integrity =
      'sha512-gbRojbRWM+nABSaS0ve4eMXMzO5gJzO6PPNGoZcbxaCwosNTEKewGQ5Bobypg6cvcRK838RIbS9Jycd80n9PVw=='
    link.crossOrigin = 'anonymous'
    link.referrerPolicy = 'no-referrer'
    link.onload = () => {
      setLoaded(true)
    }
    document.head.appendChild(link)
  }, [])

  useEffect(() => {
    const init = async () => {
      const data = await GM.getValue<string>(storageKey)
      setValue(data)
    }
    init()
  }, [])
  if (!loaded) {
    return null
  }
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
        <TextArea
          style={{
            position: 'absolute',
            left: '36px',
            width: '200px',
            maxWidth: '200px',
          }}
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          placeholder="输入屏蔽规则，每行一个"
          autoSize={{ minRows: 5, maxRows: 5 }}
        />
      )}
    </Container>
  )
}
