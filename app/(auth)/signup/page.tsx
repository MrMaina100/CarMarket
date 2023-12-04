import Image from "next/image"
import Link from "next/link"
import AuthForm from "./AuthForm"
import authsvg from '../../../public/work-from-home.svg'

export default function SignInpage() {

  return (
    <>
   
      <div className="container relative items-center h-[800px] flex-col   md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        
        <div className="relative hidden h-full flex-col bg-gray-100  p-10 text-white dark:border-r lg:flex">
           <div className="hidden md:block">
          <Image
          src={authsvg}
          width={1200}
          height={800}
          alt="Authentication"
          className="block dark:hidden"
        />      
       
         </div>     

        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center mt-10">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>
            <AuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    
    </>
  )
}









// <Card className="w-[500px]">
//          <CardHeader>
//             <CardTitle> Create an account Today </CardTitle>
//          </CardHeader>
//          {/* our social buttons will be here */}

//          <CardContent>
           
//             <form onSubmit={handleSubmit}>
//              <div className="grid w-full items-center gap-2">
//                <Label htmlFor="userName">Name</Label>
//                <Input
//                id="userName"
//                value={userName}
//                onChange={(e)=>setName(e.target.value)}
               
//                />
//                <Label htmlFor="email">Email</Label>
//                <Input
//                id="email"
//                value={email}
//                onChange={(e)=>setEmail(e.target.value)}
               
//                />
//                <Label htmlFor="password">Password</Label>
//                <Input
//                type="password"
//                id="password"
//                value={password}
//                onChange={(e)=>setPassword(e.target.value)}
               
//                />

//              </div>

//             <div className="flex justify-between mt-5 items-center">
//             <Link href='/signin'>
//             <p className="text-xs ">Already have an Account? Login</p>
//             </Link>

//             <Button type="submit">
//                Sign up
//             </Button>

//          </div>

              


//             </form>
//          </CardContent>

        



//       </Card>