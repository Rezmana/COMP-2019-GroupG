<x-layout bodyClass="g-sidenav-show  bg-gray-200">
        <x-navbars.sidebar activePage="turtle-table"></x-navbars.sidebar>
        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <!-- Navbar -->
            <x-navbars.navs.auth titlePage="Turtle Table"></x-navbars.navs.auth>
            <!-- End Navbar -->
            <div class="container-fluid py-4">
                <div class="row">
                    <div class="col-12">
                        <div class="card my-4">
                            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 class="text-white text-capitalize ps-3">Turtle table</h6>
                                </div>
                            </div>
                            <div class="me-3 my-3 text-end">
                                <a class="btn bg-gradient-dark mb-0" href=" {{ url('turtle-table/create') }}"><i
                                        class="material-icons text-sm">add</i>&nbsp;&nbsp;Add New Row
                                </a>
                            </div>
                            <div class="card-body py-0 px-0 pb-2">
                                <div class="table-responsive p-0">
                                    <table class="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    TurtleID</th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Name</th>
                                                <th
                                                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Species</th>
                                                <th
                                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Edit/Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($turtles as $turtle) 
                                            <tr>
                                                <td class="ps-3">{{$turtle->TurtleID}}</td>
                                                <td class="">{{$turtle->Name}}</td>
                                                <td class="text-center">{{$turtle->Species}}</td>
                            
                                                <td class="text-center">
                                                    <a rel="tooltip" class="btn btn-success btn-link"
                                                        href="{{ url('turtle-table/'.$turtle->TurtleID.'/'.$turtle->Name.'/'.$turtle->Species.'/edit') }}" 
                                                        data-original-title="" title="">
                                                        <i class="material-icons">edit</i>
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                    <a rel="tooltip" class="btn btn-danger btn-link"
                                                        href="{{ url('turtle-table/'.$turtle->TurtleID.'/'.$turtle->Name.'/'.$turtle->Species.'/delete') }}" 
                                                        data-original-title="" title="">
                                                        <i class="material-icons">close</i>
                                                        <div class="ripple-container"></div>
                                                    </a>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <x-footers.auth></x-footers.auth>
            </div>
        </main>
        <x-plugins></x-plugins>

</x-layout>
