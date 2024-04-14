<x-layout bodyClass="g-sidenav-show bg-gray-200">

    <x-navbars.sidebar activePage="user-management"></x-navbars.sidebar>
    <div class="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
        <!-- Navbar -->
        <x-navbars.navs.auth titlePage='User Management'></x-navbars.navs.auth>
        <!-- End Navbar -->
    
    
    <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <div class="card my-4">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 class="text-white mx-3">
                                    <strong>Edit User</strong>
                                </h6>
                            </div>
                        </div>
                        <form method='POST' action='{{ url('temphumidity-table/'.$temphumid->Temperature.'/'.$temphumid->Humidity.'/'.$temphumid->Time.'/edit') }}'>
                            @csrf
                            @method('PUT');
                            <div class="py-1 px-3">    
                                <div class="mb-3 col-md-12">
                                    <label class="form-label">Temperature</label>
                                    <input type="text" name="Temperature" class="form-control border border-2 p-2" value='{{ $temphumid->Temperature }}'>
                                    @error('Temperature') <p class='text-danger inputerror'>{{ $message }} </p> @enderror
                                </div>

                                <div class="mb-3 col-md-12">
                                    <label class="form-label">Humidity</label>
                                    <input type="text" name="Humidity" class="form-control border border-2 p-2" value='{{ $temphumid->Humidity }}'>
                                    @error('Humidity') <p class='text-danger inputerror'>{{ $message }} </p> @enderror
                                </div>
                                
                                <div class="mb-3 col-md-12">
                                    <label class="form-label">Time</label>
                                    <input type="datetime" name="Time" class="form-control border border-2 p-2" value='{{ $temphumid->Time }}'>
                                    @error('Time') <p class='text-danger inputerror'>{{ $message }} </p> @enderror
                                </div>
                        
                                <button type="submit" class="btn bg-gradient-dark">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <x-footers.auth></x-footers.auth>
        </div>
</div>
</x-layout>
