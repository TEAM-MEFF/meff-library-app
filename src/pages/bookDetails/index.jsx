import BookDetails from "../../components/bookDetails";
import BookDetailsDemo from "../../components/BookDetailsDemo";
import BookDetailsEdit from "../../components/BookDetailsEdit";
import BookDetailsMain from "../../components/BookDetailsMain";
import BookDetailsTitle from "../../components/BookDetailsTitle";
import NavbarResponsive from "../../components/NavbarResponsive";


const BookDetailsPage = () => {
  return (
    <div>
      <NavbarResponsive />
      <BookDetails />
      {/* <BookDetailsTitle /> */}
      {/* <BookDetailsDemo /> */}
      {/* <BookDetailsEdit /> */}
      <BookDetailsMain />

    </div>
  )
}

export default BookDetailsPage;