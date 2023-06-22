import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import InputText from "../components/ui/InputText";
import { getBranches } from "../utils/branches";

type BranchType = {
  id: string;
  supplierId: string;
  name: string;
  nameAr: string;
  city: string;
  whatsappNumber: string;
  enableWhatsappCommunication: boolean;
  beforeConfirmOrderMessage: {
    en: string;
    ar: string;
  };
  defaultWorkingHours: {
    start: string;
    end: string;
  };
  overrideWorkingHours: [
    {
      day: string;
      start: string;
      end: string;
    }
  ];
  isMenuBrowsingEnabled: boolean;
  isAppOrderEnabled: boolean;
  isDeliveryEnabled: boolean;
  isPickupOrderEnabled: boolean;
  isScheduledOrderEnabled: boolean;
  isDeliveryToCarEnabled: boolean;
  isReservationEnabled: boolean;
  isWaitingEnabled: boolean;
  minimumDeliveryOrderValue: number;
  location: {
    address: string;
    city: string;
    zipCode: number;
    state: string;
    country: string;
    latitude: string;
    longitude: string;
    district: string;
  };
  active: boolean;
  terms: [
    {
      type: string;
      termsAr: string;
      termsEn: string;
    }
  ];
};

type RestaurantType = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null;
  page: number;
  pagingCounter: number;
  prevPage: null;
  totalDocs: number;
  totalPages: number;
  docs: BranchType[];
};

const emptyBranchForm: BranchType = {
  id: "",
  supplierId: "",
  name: "",
  nameAr: "",
  city: "",
  whatsappNumber: "",
  enableWhatsappCommunication: false,
  beforeConfirmOrderMessage: {
    en: "",
    ar: "",
  },
  defaultWorkingHours: {
    start: "",
    end: "",
  },
  overrideWorkingHours: [
    {
      day: "",
      start: "",
      end: "",
    },
  ],
  isMenuBrowsingEnabled: false,
  isAppOrderEnabled: false,
  isDeliveryEnabled: false,
  isPickupOrderEnabled: false,
  isScheduledOrderEnabled: false,
  isDeliveryToCarEnabled: false,
  isReservationEnabled: false,
  isWaitingEnabled: false,
  minimumDeliveryOrderValue: 0,
  location: {
    address: "",
    city: "",
    zipCode: 0,
    state: "",
    country: "",
    latitude: "",
    longitude: "",
    district: "",
  },
  active: false,
  terms: [
    {
      type: "",
      termsAr: "",
      termsEn: "",
    },
  ],
};
const emptyRestaurantForm: RestaurantType = {
  hasNextPage: false,
  hasPrevPage: false,
  limit: 10,
  nextPage: null,
  page: 1,
  pagingCounter: 1,
  prevPage: null,
  totalDocs: 1,
  totalPages: 1,
  docs: [emptyBranchForm],
};

function Branches() {
  const { isLoading, isError, data, error, refetch } = useQuery(["payment-setup"], getBranches);
  const [restaurant, setRestaurant] = useState<RestaurantType>(emptyRestaurantForm);
  const [selectedBranchIndex, setSelectedBranchIndex] = useState<Number>();
  const [selectedBranchForm, setSelectedBranchForm] = useState(emptyBranchForm);

  useEffect(() => {
    if (data && data.data) {
      setRestaurant(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (restaurant) {
      if (restaurant.docs && restaurant.docs.length > 0) {
        setSelectedBranchForm(restaurant.docs[0]);
        setSelectedBranchIndex(0);
      }
    }
  }, [restaurant]);

  console.log("restaurant", restaurant);

  if (isLoading) return <>Loading Data..</>;
  if (isError) return <>An error has occurred</>;

  return (
    <div className='w-full flex flex-col'>
      <div className='flex flex-row bg-white items-center justify-between w-full h-full rounded-lg'>
        <div className='flex flex-row items-center justify-center ml-3 h-full'>
          <div className='font-bold text-lg block m-3'>Branches</div>
          <div className='text-xs text-gray-400'></div>
        </div>
        <div className='m-4 flex flex-row items-center justify-center'>
          <button className='p-2 font-semibold text-md text-white bg-red-500 rounded-lg'>
            + Add Branch
          </button>
        </div>
      </div>
      <div className='flex flex-1'>
        <div className='flex flex-row justify-between items-center bg-white w-full rounded-lg mt-3 flex-wrap'>
          {restaurant.docs &&
            restaurant.docs.length > 0 &&
            restaurant.docs.map((branch, index) => {
              return (
                <div key={branch.id}>
                  <button
                    className='text-sm p-2 font-semibold bg-red-500 text-white rounded-lg m-1'
                    type='button'>
                    {branch.name}
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      <div className='flex flex-1'>
        <div className='flex flex-row justify-between items-center bg-white w-full rounded-lg mt-3 flex-wrap'>
          {selectedBranchIndex != undefined && (
            <div className='flex flex-row flex-wrap w-full'>
              <div className='basis-1/2 w-full'>
                <InputText
                  value={selectedBranchForm.name}
                  label='Name in English'
                  onChangeHandler={(e) => {
                    setSelectedBranchForm((prevState) => {
                      return { ...prevState, name: e.target.value };
                    });
                  }}
                />
              </div>
              <div className='basis-1/2 w-full'>
                <InputText
                  value={selectedBranchForm.nameAr}
                  label='Name in Arabic'
                  onChangeHandler={(e) => {
                    setSelectedBranchForm((prevState) => {
                      return { ...prevState, nameAr: e.target.value };
                    });
                  }}
                />
              </div>
              <div className='basis-1/2 w-full'>
                <InputText
                  value={selectedBranchForm.name}
                  label='Name'
                  onChangeHandler={(e) => {
                    setSelectedBranchForm((prevState) => {
                      return { ...prevState, name: e.target.value };
                    });
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Branches;
