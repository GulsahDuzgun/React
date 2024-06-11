import supabase from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("There was an error while fetching cabine data");
  }

  return cabins;
}

export async function deleteCabin(id) {
  //supabase is supabase client which is we creared

  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("The cabin could not be deleted");
  }
  return data;
}
