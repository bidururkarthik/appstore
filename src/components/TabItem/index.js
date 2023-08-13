// Write your code here
import './index.css'

const TabItem = props => {
  const {tabname, onchangestatus, isActive} = props
  const {tabId, displayText} = tabname
  const appclick = () => {
    onchangestatus(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : 'button'

  return (
    <li className="tabcontainer">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={appclick}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
