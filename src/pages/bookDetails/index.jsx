import EditForm from "../../components/EditForm";
import Testimonies from "../../components/Testimonies";
import Library from "../floatingButton";

const BookDetails = () => {
  return (
    <div>
      <h1>BookDetails</h1>
      {/* <Testimonies /> */}
      <br />
      <h1>Hi</h1>
      <Library />
      <EditForm />
      <button className="border-2">Submit</button>
    </div>
  )
}

export default BookDetails;