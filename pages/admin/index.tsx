import { NextPage } from "next"
import { PublicLayouts } from "../../layouts/PublicLayouts"
import { MainLayouts } from '../../layouts/MainLayouts';


const indexPage: NextPage = () => {
  return (
    <MainLayouts>
      <h1>Admin</h1>
    </MainLayouts>
  )
}
export default indexPage