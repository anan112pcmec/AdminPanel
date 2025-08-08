<script lang="ts">
  export let nama = "Faiz Hannan Hakim";
  export let jabatan = "Administrator";
</script>

<div class="flex flex-col w-full h-full bg-gray-800 text-gray-100">
  <div class="flex items-center px-6 py-4 border-b border-gray-700">
    <div class="text-lg font-semibold">{nama}</div>
  </div>

  <div class="px-6 py-2 text-sm text-gray-400">{jabatan}</div>

  <nav class="flex flex-col mt-4 space-y-1 px-4">
    <a href="/" class="px-4 py-2 rounded hover:bg-gray-700 transition-colors">Dashboard</a>
    <a href="/users" class="px-4 py-2 rounded hover:bg-gray-700 transition-colors">Users</a>
    <a href="/barang" class="px-4 py-2 rounded hover:bg-gray-700 transition-colors">Barang</a>
    <a href="/settings" class="px-4 py-2 rounded hover:bg-gray-700 transition-colors">Settings</a>
    <a href="/reports" class="px-4 py-2 rounded hover:bg-gray-700 transition-colors">Reports</a>
    <a href="/logout" class="px-4 py-2 rounded hover:bg-gray-700 transition-colors">Logout</a>
  </nav>

  <div class="mt-auto px-6 py-4 text-xs text-gray-500">
    © 2025 MyCompany
  </div>
</div>
