import useSWRMutation from 'swr/mutation'

interface PostSignInArguments {
  email: string
  password: string
}

async function postSignIn(key: string, { arg }: { arg: PostSignInArguments }) {
  // Here we would make a request to the server to sign in the user
  await new Promise((resolve) => setTimeout(resolve, 500))

  return { id: 1, email: arg.email }
}

export default function useSignInMutation() {
  return useSWRMutation('/api/sign-in', postSignIn)
}
