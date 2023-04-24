const writeJson = (
  path: string,
  data: { firstname: string; lastname: string },
): string => {
  try {
    Deno.writeTextFileSync(path, JSON.stringify(data));

    return "Written to " + path;
  } catch (e) {
    return e.message;
  }
};
const firstname = prompt("Please enter your firstname:") || "jhon";
console.log("Name:", firstname);
const lastname = prompt("Please enter your lastname:") || "Doe";
console.log("Name:", lastname);

console.log(writeJson("./data.json", { firstname, lastname }));
