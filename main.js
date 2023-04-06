function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

for (let i = 6; i < 500; i++) {
    document.getElementsByClassName("n6VkK eKaL7 Bnaur zUzvu")[0].click();
    await sleep(2000);
    document.getElementsByClassName("Ewflr")[i].click();
    await sleep(2000);
    document.getElementsByClassName("xjFne eKaL7 Bnaur")[0].click();
    await sleep(2000);
    window.history.back()
    await sleep(2000);
}
