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
    <div class="box-container">
      <div class="box card-motion">
        <h1>VISA</h1>
        <div class="gold"></div>
        <h2>2303 2530 0033 3493</h2>
        <div class="exp">
          <p class="exp-text">EXSPRESS END</p>
          <p>10/24</p>
        </div>
        <h3>Ujjwal Kr. Situ</h3>
      </div>
    </div>
    <div class="circle"></div>
  </section>
</template>

<style scoped>
section {
  height: calc(100vh - 122px);
  overflow: hidden;
  position: relative;
  padding: 50px 0;
}
.sphere {
  position: absolute;
  transform: translate(-10%, 0%);
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 0 100px;
  font-size: 1.25rem;
}
.text h1 {
  width: 12ch;
  font-size: clamp(2rem, 20vw, 4rem);
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
  align-self: flex-start;
  border: 2px solid white;
}
.box-container {
  width: clamp(300px, 100%, 500px);
  height: 300px;
  transform: translateY(1000px);
  animation: CardEnter 1s ease forwards;
  position: absolute;
  right: 100px;
  top: 30px;
}
.box {
  position: relative;
  margin-left: auto;
  padding-bottom: 20px;
  width: 100%;
  background: lightskyblue;
  border-radius: 20px;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.2);
  transition: all 1s;
  /* border: 2px solid white; */
}
.card-motion {
  animation: cardMotion 2s ease-in-out 1s infinite alternate;
  transition: all 1s;
}

.box h1 {
  font-size: 3rem;
  margin-right: 20px;
  text-align: end;
}
.box h2 {
  font-size: 2.2rem;
  text-align: center;
  margin-top: 30px;
  letter-spacing: 4px;
}

.box h3 {
  font-size: 1.5rem;
  margin: 20px 0 0 30px;
}

.box .exp {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box .exp-text {
  width: 10ch;
  font-size: 0.5rem;
}
.box .gold {
  width: 80px;
  height: 50px;
  background: gold;
  margin-left: 30px;
  border-radius: 5px;
}

.circle {
  width: 50vw;
  height: 50vw;
  background: linear-gradient(to right, #e48f10, #efb45a, #eec07a);
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-40%, 50%);
  z-index: -2;
  animation: expandCircle 8s linear 0.3s infinite;
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

@keyframes CardEnter {
  to {
    transform: translateY(0%);
    transition: all 1s;
  }
}

@keyframes cardMotion {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(20%);
  }
}

/*MEDIA*/
@media (max-width: 1150px) {
  .box-container {
    right: 50px;
  }
  .box {
    width: 90%;
  }
  .text {
    margin: 0 500px 0 50px;
  }
  .box h2 {
    letter-spacing: 2px;
  }
}

@media (max-width: 1000px) {
  section {
    height: 100vh;
    margin-bottom: 300px;
    overflow: visible;
    padding: 0;
  }
  .text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .text h1 {
    font-size: clamp(1.5rem, 10.5vw, 4rem);
  }
  .text .start-btn {
    align-self: center;
  }
  .box-container {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 300px auto;
    top: 50%;
    padding: 10px;
  }
  .box {
    width: 100%;
  }
}

@media (max-width: 465px) {
  .box h2 {
    font-size: clamp(1.5rem, 5.4vw, 1.9rem);
  }
}
</style>
