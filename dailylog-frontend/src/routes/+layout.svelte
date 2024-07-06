<script>
	import '../app.css';
</script>

<!-- Navbar -->
<div class="navbar bg-base-300">
	<!-- Brand -->
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href={'#'}>Daily Log</a>
	</div>

	<!-- User Avatar & Menu -->
	<div class="flex-none gap-2">
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="avatar btn btn-circle btn-ghost">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					/>
				</div>
			</div>
			<ul
				tabindex="0"
				class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-300 p-2 shadow"
			>
				<li><a>Settings</a></li>
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>

<slot></slot>
