import supabase from "./supabase";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw Error("There was an error while fetching cabine data");
  }
  return cabins;
}
