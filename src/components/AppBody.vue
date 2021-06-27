<template>
    <section>
        <div class="animation">
            <img
                src="../assets/Sphere.svg"
                alt="sphere-large"
                class="sphere sphere-large"
            />
            <img
                src="../assets/Sphere.svg"
                alt="sphere-modrate"
                class="sphere sphere-modrate"
            />
            <img
                src="../assets/Sphere.svg"
                alt="sphere-small"
                class="sphere sphere-small"
            />
        </div>
        <div class="text">
            <h1>Playbank - Enjoy Financial Success</h1>
            <p>We help our user to make the right financial decisions.</p>
            <button class="start-btn">Start Now</button>
        </div>

        <div class="circle"></div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
    height: calc(100vh - 122px);
    overflow: hidden;
    position: relative;
}
.sphere {
    position: absolute;
    /* max-height:; */
}
.sphere-large {
    top: 50%;
    animation: motionSphere 10s linear infinite forwards;
}
.sphere-modrate {
    width: 50px;
    top: 20%;
    left: 40%;
    animation: motionSphere 12s linear 0.51s infinite forwards reverse;
}
.sphere-small {
    width: 40px;
    top: 70%;
    left: 30%;
    animation: motionSphere 8s linear 0.3s infinite forwards;
}

.text {
    position: absolute;
    margin: 0 100px;
    font-size: 1.25rem;
}
.text h1 {
    width: 12ch;
    font-size: clamp(2rem, 25vw, 4rem);
}
.text p {
    width: 25ch;
}
.text .start-btn {
    margin: 40px 0;
    padding: 20px 50px;
    border-radius: 10px;
    border: none;
    background: linear-gradient(to right, #e48f10, #efb45a, #eec07a);
    font-weight: 600;
    color: white;
}

.circle {
    width: 600px;
    height: 600px;
    background: linear-gradient(to right, #e48f10, #efb45a, #eec07a);
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-40%, 50%);
    z-index: -2;
    animation: expandCircle 8s linear 0.3s infinite;
    /* transition: 2s; */
}

.circle:hover {
    transform: translate(-50%, 0%) scale(1);
}
/* Animation */
@keyframes motionSphere {
    from {
        transform: translate(-10%, 0%);
    }
    25% {
        transform: translate(-80px, -100%);
    }
    50% {
        transform: translate(40%, -120%);
    }

    75% {
        transform: translate(100%, -50%);
    }
    to {
        transform: translate(-10%, 0%);
    }
}

@keyframes expandCircle {
    from {
        transform: translate(-40%, 40%) scale(0.8);
    }
    33% {
        transform: translate(-50%, 60%) scale(1);
    }
    66% {
        transform: translate(-60%, 40%) scale(0.9);
    }
    to {
        transform: translate(-40%, 40%) scale(0.8);
    }
}
</style>
