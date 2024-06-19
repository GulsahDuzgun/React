import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filterVal = searchParams.get("status");

  const filter =
    !filterVal || filterVal === "all"
      ? null
      : { field: "status", value: filterVal, method: "eq" };

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookings({ filter }),
    queryKey: ["bookings", filter],
  });

  return { bookings, isLoading };
}
