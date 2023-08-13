// Write your code here
import './index.css'

const AppItem = props => {
  const {Appitem} = props
  const {appName, category, imageUrl} = Appitem
  return (
    <div className="appItemcontainer">
      <img src={imageUrl} alt={appName} className="appimage" />
      <p className="appname">{appName}</p>
    </div>
  )
}
export default AppItem
