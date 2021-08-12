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
      <h1>Meet banking that keeps pace with you</h1>
      <p>Join the exclusive Firstlist and get 10% cashback on all spends</p>
      <form action="#" method="post" class="form-number">
        <input type="number" class="number" placeholder="Type your number" />
        <div class="prefix">+91</div>
        <button class="start-btn">check firstlist status</button>
      </form>
    </div>
    <div class="box-container">
      <div class="box card-motion">
        <img src="../assets/card.png" alt="card" class="card" />
      </div>
    </div>
    <div class="circle"></div>
  </section>
</template>

<style scoped>
.form-number {
  width: 100%;
  position: relative;
  font-size: 1.5rem;
  margin: 40px 0;
}
.prefix {
  position: absolute;
  top: 17px;
  left: 10px;
}
.number {
  width: 100%;
  height: 65px;
  font-size: inherit;
  border-radius: 10px;
  padding-left: 70px;
  border: 2px solid #eec07a;
  transition: all 0.3s ease;
}
.number:focus {
  border: 3px solid #e48f10;
  outline: #e48f10;
}
.text .start-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  text-transform: capitalize;
  padding: 20px 50px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(to right, #e48f10, #efb45a, #eec07a);
  font-weight: 600;
  color: white;
  align-self: flex-start;
  opacity: 0.9;
}
.text .start-btn:active {
  opacity: 1;
}
section {
  height: calc(100vh - 122px);
  overflow-y: clip;
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
  width: 14ch;
  font-size: 4rem;
}
.text p {
  width: 30ch;
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
  border-radius: 20px;
  transition: all 1s;
}

.card {
  width: 100%;
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
    transform: translateY(10%);
  }
}

/*MEDIA*/
@media (max-width: 1230px) {
  .box-container {
    right: 50px;
  }
  .box {
    width: 85%;
  }
  .text {
    margin: 0 500px 0 50px;
  }
  .text h1 {
    font-size: 3.7rem;
  }
  .box h2 {
    letter-spacing: 2px;
  }
  .text .start-btn {
    padding: 20px 30px;
  }
}

@media (max-width: 980px) {
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
    font-size: clamp(2.5rem, 10.5vw, 4rem);
  }
  .form-number {
    align-self: auto;
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
@media (max-width: 650px) {
  .text .start-btn {
    position: relative;
    opacity: 1;
    width: 100%;
  }
}

@media (max-width: 465px) {
  .box h2 {
    font-size: clamp(1.5rem, 5.4vw, 1.9rem);
  }
}
</style>
