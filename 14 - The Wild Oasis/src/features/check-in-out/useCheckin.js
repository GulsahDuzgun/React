import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const querClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkInFunc, isLoading: isCheckInLoading } = useMutation({
    mutationFn: ({ bookingId, newFeaturesObj }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...newFeaturesObj,
      }),

    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked in`);
      querClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => {
      toast.error("There was an error while checking in");
    },
  });
  return { checkInFunc, isCheckInLoading };
}
