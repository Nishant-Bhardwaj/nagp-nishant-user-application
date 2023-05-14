
<script lang="ts">

    let username = ""
    let password = ""
    $: islogin  = "false"

    const login = () => {
        console.log("Submitted Button Clicked !!");
        if(username === "admin" && password === "admin"){
            islogin = "true"
        }else{
            alert("Invalid Credentails !!");
        }
    }


    const reset = () => {
        console.log("Reset Button Clicked !!");
        username = ""
        password = ""
    }

</script>

{#if islogin == "true"}

<div class="card">
    <h3>Let's play with Directory Web Component: </h3>
    <nishant-directory></nishant-directory>
</div>

{:else}

<h2>Welcome to User Service !</h2>

<div class="login-card">

    <div>
        <label>
            <h5><b>username : &nbsp;</b></h5>
            <input type="text" bind:value={username} class="in"/>
        </label>
    </div>

    <div>
        <label>
            <h5><b>password : &nbsp;</b></h5>
            <input type="password" bind:value={password} class="in"/>
        </label>
    </div>

    <button type="submit" on:click={login} class="saveBtn"> Login </button>
    <button type="reset" on:click={reset} class="cancelBtn"> Reset </button>


</div>

{/if}



<style>
    .login-card{
        width: 350px;
        height: auto;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
        padding: 25px;
        margin-left: 100px;
        text-decoration-color: rgb(1, 24, 46);
        position: relative;
    }

    .card{
        width: 500px;
        height: auto;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
        padding-bottom: 20px;
        margin: 1px;
        text-decoration-color: rgb(1, 24, 46);
        position: relative;
    }


    input {
        flex-grow: 1;
        width: auto;
    }

    h2{
        text-align: center;
        padding-left: 55%;
        width: 150%;
        color: rgb(248, 102, 5);
    }

    h3{
        text-align: left;
        margin-top: 0px;
    }


    label{
        margin-left: 5px;
        display: flex;
        align-items: center;
        height: 30px;
    }

    .saveBtn {
        background-color: rgb(189, 247, 193);
        margin-top: 10px;
        margin-left: 5px;
        width: 46%;
        padding: 0.2em 1em;
    }

    .saveBtn:hover {
        border-color: #05f821;
    }

    .cancelBtn {
        background-color: rgb(242, 190, 190);
        margin-top: 10px;
        width: 46%;
        margin-left: 18px;
        padding: 0.2em 1em;
    }

    .cancelBtn:hover {
        border-color: red;
    }

</style>