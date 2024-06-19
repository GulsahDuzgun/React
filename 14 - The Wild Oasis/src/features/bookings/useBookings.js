import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filterVal = searchParams.get("status");
  const sortByVal = searchParams.get("sortBy") || "startDate-desc";

  const filter =
    !filterVal || filterVal === "all"
      ? null
      : { field: "status", value: filterVal, method: "eq" };

  const [field, direction] = sortByVal.split("-");
  const sortBy = !sortByVal ? null : { field, direction };

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookings({ filter, sortBy }),
    queryKey: ["bookings", filter, sortBy],
  });

  return { bookings, isLoading };
}
