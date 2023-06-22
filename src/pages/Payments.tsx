import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPayments } from "../utils/payments";
import { Switch } from "@headlessui/react";
import ToggleSwitch from "../components/ui/ToggleSwitch";

function Payments() {
  const { isLoading, isError, data, error, refetch } = useQuery(["payment-setup"], getPayments);

  const [paymentDataDoc, setPaymentDataDoc] = useState({});
  const [paymentSwitch, setPaymentSwitch] = useState({
    inStoreePayment: false,
    inStorecashPayment: false,
    inStorerewardsClaim: false,
    pickupePayment: false,
    pickupcashPayment: false,
    pickuprewardsClaim: false,
    deliveryePayment: false,
    deliverycashPayment: false,
    deliveryrewardsClaim: false,
  });
  const [paymentHeaders, setPaymentHeaders] = useState([
    { title: "Payment Options" },
    { title: "Online Payment" },
    { title: "Cash Payment" },
    { title: "Reward Payment" },
  ]);

  useEffect(() => {
    if (data && data.data.docs && data.data.docs.length > 0) {
      const docs = data.data.docs[0];
      const _paymentSwitch = paymentSwitch;

      _paymentSwitch.inStoreePayment = docs.inStore.ePayment || false;
      _paymentSwitch.inStorecashPayment = docs.inStore.cashPayment || false;
      _paymentSwitch.inStorerewardsClaim = docs.inStore.rewardsClaim || false;
      _paymentSwitch.pickupePayment = docs.pickup.ePayment || false;
      _paymentSwitch.pickupcashPayment = docs.pickup.cashPayment || false;
      _paymentSwitch.pickuprewardsClaim = docs.pickup.rewardsClaim || false;
      _paymentSwitch.deliveryePayment = docs.delivery.ePayment || false;
      _paymentSwitch.deliverycashPayment = docs.delivery.cashPayment || false;
      _paymentSwitch.deliveryrewardsClaim = docs.delivery.rewardsClaim || false;

      setPaymentSwitch(_paymentSwitch);
      setPaymentDataDoc(docs);
    }
  }, [data]);

  console.log("paymentDataDoc", paymentDataDoc, paymentSwitch);

  if (isLoading) return <>Loading Data..</>;
  if (isError) return <>An error has occurred</>;

  return (
    <div className='w-full flex flex-col'>
      <div className='flex flex-row bg-white items-center justify-between w-full h-full rounded-lg'>
        <div className='flex flex-row items-center justify-center ml-3 h-full'>
          <div className='font-bold text-lg block m-3'>Online Payments</div>
          <div className='text-xs text-gray-400'>
            Payment online fees is 1.9% of each transaction from Mada and 2.4% of each transaction
            <br />
            from VISA/MASTERCARD and will be settled every Sunday and Thursday of each week
          </div>
        </div>
        <div className='m-4 flex flex-row items-center justify-center'>
          <button className='p-2 font-semibold text-md text-white bg-red-500 rounded-lg'>
            Edit Payment Information
          </button>
        </div>
      </div>
      <div className='flex flex-1'>
        <div className='flex flex-row justify-between items-center bg-white w-full rounded-lg my-3 flex-wrap'>
          {paymentHeaders.map((header, i) => {
            return (
              <div key={i} className='p-4 font-bold text-sm border-b-2 basis-1/4'>
                {header.title}
              </div>
            );
          })}

          {paymentDataDoc && (
            <>
              <div className='p-4 font-semibold text-sm basis-1/4'>Dine in Orders</div>
              <div className='basis-1/4'>
                <ToggleSwitch
                  initialState={paymentSwitch.inStoreePayment}
                  onChangeHandler={() =>
                    setPaymentSwitch({
                      ...paymentSwitch,
                      inStoreePayment: !paymentSwitch.inStoreePayment,
                    })
                  }
                />
              </div>
              <div className='basis-1/4'>
                <ToggleSwitch
                  initialState={paymentSwitch.inStorecashPayment}
                  onChangeHandler={() =>
                    setPaymentSwitch({
                      ...paymentSwitch,
                      inStorecashPayment: !paymentSwitch.inStorecashPayment,
                    })
                  }
                />
              </div>
              <div className='basis-1/4'>
                <ToggleSwitch
                  initialState={paymentSwitch.inStorerewardsClaim}
                  onChangeHandler={() =>
                    setPaymentSwitch({
                      ...paymentSwitch,
                      inStorerewardsClaim: !paymentSwitch.inStorerewardsClaim,
                    })
                  }
                />
              </div>

              <div className='p-4 font-semibold text-sm basis-1/4'>Pickup Orders</div>
              <div className='basis-1/4'>
                <ToggleSwitch
                  initialState={paymentSwitch.pickupePayment}
                  onChangeHandler={() =>
                    setPaymentSwitch({
                      ...paymentSwitch,
                      pickupePayment: !paymentSwitch.pickupePayment,
                    })
                  }
                />
              </div>
              <div className='basis-1/4'>
                <ToggleSwitch
                  initialState={paymentSwitch.pickupcashPayment}
                  onChangeHandler={() =>
                    setPaymentSwitch({
                      ...paymentSwitch,
                      pickupcashPayment: !paymentSwitch.pickupcashPayment,
                    })
                  }
                />
              </div>
              <div className='basis-1/4'>
                <ToggleSwitch
                  initialState={paymentSwitch.pickuprewardsClaim}
                  onChangeHandler={() =>
                    setPaymentSwitch({
                      ...paymentSwitch,
                      pickuprewardsClaim: !paymentSwitch.pickuprewardsClaim,
                    })
                  }
                />
              </div>

              <div className='p-4 font-semibold text-sm basis-1/4'>Delivery</div>
              <div className='basis-1/4'>
                <ToggleSwitch
                  initialState={paymentSwitch.deliveryePayment}
                  onChangeHandler={() =>
                    setPaymentSwitch({
                      ...paymentSwitch,
                      deliveryePayment: !paymentSwitch.deliveryePayment,
                    })
                  }
                />
              </div>
              <div className='basis-1/4'>
                <ToggleSwitch
                  initialState={paymentSwitch.deliverycashPayment}
                  onChangeHandler={() =>
                    setPaymentSwitch({
                      ...paymentSwitch,
                      deliverycashPayment: !paymentSwitch.deliverycashPayment,
                    })
                  }
                />
              </div>
              <div className='basis-1/4'>
                <ToggleSwitch
                  initialState={paymentSwitch.deliveryrewardsClaim}
                  onChangeHandler={() =>
                    setPaymentSwitch({
                      ...paymentSwitch,
                      deliveryrewardsClaim: !paymentSwitch.deliveryrewardsClaim,
                    })
                  }
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payments;
