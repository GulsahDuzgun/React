import supabase, { supabaseUrl } from "./supabase";

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

export async function createEditCabin(newCabin, id) {
  //https://gabbeqyyjjkdxvqxuqsn.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const imgUrl = `cabin-${Math.random()}-${newCabin.image?.name}`.replaceAll(
    "/",
    ""
  );
  const imageName = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imgUrl}`;

  //create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([
      {
        ...newCabin,
        image: imageName,
      },
    ])
    .select();

  if (error) {
    throw new Error("The cabin could not be created");
  }

  //load image to bucket
  const { error: loadBucketErr } = await supabase.storage
    .from("cabin-images")
    .upload(imgUrl, newCabin.image);

  //if there was an error while img  loading , delete the created cabin
  if (loadBucketErr) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("There was an error while loading the image");
  }

  return data;
}
