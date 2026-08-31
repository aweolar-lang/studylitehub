import NavbarClient from "./NavbarClient";

export default async function NavbarServer() {
  // PLACEHOLDER: This is where you will fetch your user session later.
  // Example: const { data: { session } } = await supabase.auth.getSession();
  
  // Toggle this to true/false to see the logged-in vs logged-out UI
  const mockSession = null; 
  // const mockSession = { user: { name: "Denis", email: "denis@example.com" } };
  //thanks

  return <NavbarClient session={mockSession} />;
}