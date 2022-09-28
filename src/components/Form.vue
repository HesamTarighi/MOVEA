<template>
    <div class="max-w-3xl mx-auto grid grid-cols-2 bg-secondary rounded-lg shadow overflow-hidden">
        <div class="h-full relative">
            <img class="w-full h-full object-cover object-center" src="../assets/covers/form-banner.jpg"/>
        </div>
        <div class="w-full p-8">
            <form method="post" action="#" onSubmit="return false">
                <h1 class=" text-2xl font-bold">Sign in to your account</h1>
                <div>
                    <span class="opacity-70 text-sm"> Don't have an account? </span>
                    <a href="/" class="text-sm font-semibold"> Sign up </a>
                </div>
                <div class="mb-4 mt-6">
                    <label class="block opacity-70 text-sm font-semibold mb-2" htmlFor="email"> Email </label>
                    <input class="text-sm appearance-none rounded w-full py-2 px-3 text-fourth bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="email" type="text" placeholder="Your email address"/>
                </div>
                <div class="mb-6 mt-6">
                    <label class="block opacity-70 text-sm font-semibold mb-2" htmlFor="password"> Password </label>
                    <input class="text-sm bg-opacity-70 appearance-none rounded w-full py-2 px-3 text-fourth mb-1 leading-tight focus:outline-none focus:shadow-outline h-10" id="password" type="password" placeholder="Your password"/>
                    <a class="inline-block align-baseline text-sm" href="/forgot"> Forgot Password? </a>
                </div>
                <div class="flex w-full mt-8">
                    <CButton class="w-full"> Sign in </CButton>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import CButton from './Button.vue'

    export default {
        components: {CButton}
    }
</script>
