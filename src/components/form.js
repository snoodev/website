import supabase from "../config/supabaseClient";

const submit = document.getElementById("submit");

submit.addEventListener("click", async function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const { data, error } = await supabase
    .from("users")
    .insert({ name: name, email: email });

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  if (!name || !email) {
    console.log("Please fill in all the fields correctly.");
    return;
  }

  document.hello.reset();
});
