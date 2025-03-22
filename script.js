<script>
        document.getElementById("menu-btn").addEventListener("click", function() {
            document.getElementById("sidebar").style.right = "0";
        });
        function closeMenu() {
            document.getElementById("sidebar").style.right = "-270px";
        }
        function openLogin() {
            document.getElementById("login-popup").style.display = "block";
        }
        function startGame() {
            document.getElementById("game-container").style.display = "block";
            gameLoop();
        }
        
        // لعبة الثعبان
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        let snake = [{x: 150, y: 150}];
        let direction = "RIGHT";
        let food = { x: Math.floor(Math.random() * 15) * 20, y: Math.floor(Math.random() * 15) * 20 };

        function draw() {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "red";
            ctx.fillRect(food.x, food.y, 20, 20);

            ctx.fillStyle = "lime";
            snake.forEach(segment => ctx.fillRect(segment.x, segment.y, 20, 20));
        }

        function update() {
            let head = { ...snake[0] };

            if (direction === "UP") head.y -= 20;
            if (direction === "DOWN") head.y += 20;
            if (direction === "LEFT") head.x -= 20;
            if (direction === "RIGHT") head.x += 20;

            snake.unshift(head);

            if (head.x === food.x && head.y === food.y) {
                food = { x: Math.floor(Math.random() * 15) * 20, y: Math.floor(Math.random() * 15) * 20 };
            } else {
                snake.pop();
            }
        }

        function gameLoop() {
            update();
            draw();
            setTimeout(gameLoop, 100);
        }

        document.addEventListener("keydown", event => {
            if (event.key === "ArrowUp") direction = "UP";
            if (event.key === "ArrowDown") direction = "DOWN";
            if (event.key === "ArrowLeft") direction = "LEFT";
            if (event.key === "ArrowRight") direction = "RIGHT";
        });
    </script>
</body>
</html>
