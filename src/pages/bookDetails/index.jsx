import BookDetails from "../../components/bookDetails";
import BookDetailsEdit from "../../components/BookDetailsEdit";
import BookDetailsMain from "../../components/BookDetailsMain";
import NavbarResponsive from "../../components/NavbarResponsive";


const BookDetailsPage = () => {
  return (
    <div>
      <NavbarResponsive />
      <BookDetails />
      {/* <BookDetailsEdit /> */}
      {/* <BookDetailsMain /> */}

    </div>
  )
}

export default BookDetailsPage;