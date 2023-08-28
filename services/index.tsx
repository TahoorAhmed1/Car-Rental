import request, { gql } from "graphql-request";
type form = {
  location: string;
  pickUpDate: string;
  dropOffDate: string;
  pickUpTime: string;
  dropOffTime: string;
  contactNumber: string;
  userName: string;
  carId: string;
};
export const getCarList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        id
        name
        price
        image {
          url
        }
        carBrand
        carType
      }
    }
  `;
  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clloerp2d0j2701um9nis7hq0/master",
    query
  );
  return result;
};
export const StoreLocation = async () => {
  const query = gql`
    query StoreLocation {
      storeLocations {
        address
      }
    }
  `;
  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clloerp2d0j2701um9nis7hq0/master",
    query
  );
  return result;
};
export const createBooking = async (formValue: form) => {
  console.log(formValue);
  
  const mutationQuery =
    gql`
  mutation MyMutation {
    createBooking(
      data:  {userName: "` +
    formValue.userName +
    `", 
    pickUpDate: "` +
    formValue.pickUpDate +
    `", 
    pickUpTime: "` +
    formValue.pickUpTime +
    `", 
      dropOffDate: "` +
    formValue.dropOffDate +
    `", 
      dropOffTime: "` +
    formValue.dropOffTime +
    `", 
      contactNumber: "` +
    formValue.contactNumber +
    `", 
      carId: {connect: 
        {id: "` +
    formValue.carId +
    `"}}}
    ) {
      id
    }
  }
  
  `;
  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clloerp2d0j2701um9nis7hq0/master",
    mutationQuery
  );
  return result;
};
