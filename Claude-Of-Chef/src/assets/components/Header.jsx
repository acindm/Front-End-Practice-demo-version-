import chefClaudeLogo from "/src/assets/images/chef-icon.png";

export default function Header(){
  return(
    <header>
      <img src={chefClaudeLogo} />
      <h1>Chef Claude</h1>
    </header>
  )
}