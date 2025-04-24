import Button from "../buttons/Button";
import Input from "../Input";

function CreateAccount() {
  return (
    <div className="flex max-md:flex-col items-center max-md:justify-center w-full gap-[30px] md:gap-10 xl:gap-[60px]">
      <div className="w-full md:max-w-2/5 h-60 md:h-[530px] xl:h-[642px] bg-[url(/images/space_rover.png)] bg-cover bg-center bg-no-repeat" />
      <div className="grid grid-cols-1 items-center max-md:mx-auto w-full max-w-80 xl:max-w-md">
        <h2 className="text-4xl xl:text-5xl leading-[120%] xl:leading-[110%] font-semibold">
          Create Account
        </h2>
        <p className="text-base xl:text-[22px] leading-[140%] xl:leading-[160%] mt-5 ">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <Input
          inputType="username"
          placeholder="Username"
          className="mt-7 md:mt-10"
        />
        <Input inputType="email" placeholder="Email Address" />
        <Input inputType="password" placeholder="Password" />
        <Input inputType="password" placeholder="Confirm Password" />
        <Button label="Create Account" classes="mt-7" />
        <div className="md:hidden h-10" />
      </div>
    </div>
  );
}

export default CreateAccount;
